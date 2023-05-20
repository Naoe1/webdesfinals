import { Center, Table } from "@mantine/core";
import { useState, useEffect } from "react";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    setTotalPrice(cart.reduce((a,i) => a + i.price,0))
    setTotalCount(cart.length)
  }, [cart])
  const ths = (
    <tr>
      <th>ID number</th>
      <th>Category</th>
      <th>Product Name</th>
      <th>Price</th>
    </tr>
  );
  const rows = cart.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.category}</td>
      <td>{product.model}</td>
      <td>PHP {product.price}</td>
    </tr>
  ));
  const tf = (
    <tr>
        <th></th>
        <th></th>
        <th colSpan={2} style={{paddingLeft: "25.2%"}}>Subtotal({totalCount}) PHP {totalPrice}</th>
    </tr>
  )
  return (
    <Center>
      <Table striped highlightOnHover verticalSpacing="md" style={{minHeight: "400px"}}>
        <thead>{ths}</thead>
        {<tbody>{rows}</tbody>}
        <tfoot>{tf}</tfoot>
      </Table>
    </Center>
  );
};

export default Cart;
