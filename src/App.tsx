import React from 'react';
import { useState } from 'react'
import Header from './Header';
import Todo from './Todo';
import Footer from './Footer';
function App() {
    return (
        <div>
            <Header firstname="Phumiphat" lastname="Srikrachang" student_id={630610750} ></Header><Todo/>
            <Footer copyrightText="Copyright © 2021 Minimal todo list by Phumiphat Srikrachang"></Footer>
        </div>
    );
}

export default App;
