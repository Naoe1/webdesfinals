import {useNavigate } from "react-router-dom";
import React from "react";

const ShopHome = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate("/shop/laptops");
    }, [])
    return (
        <div>
        </div>
    )
}

export default ShopHome;