import React from 'react';
import ProductCategoryList from './ProductList';
import Footer from './Footer';


const Home = () => {
    return (
        <>
            <div className="home-content">
                <div className="banner">
                    <h3>Descubre la Última Tecnología en Smartphones</h3>
                    <p> <span>Descubre la Última Tecnología en Smartphones</span></p>
                </div>
                <ProductCategoryList />
            </div>
            <Footer />
        </>
    );
};

export default Home;
