import React from "react";

const MenuMobile = () => {
    return (
        <div className='menu-mobile'>
            <label className='toggle-menu' for='toggle-responsive'>
                Menu
            </label>
            <input type='checkbox' id='toggle-responsive' />
            <ul className='nav level-one'>
                <li>
                    <a href='#'>Item 1</a>
                </li>
                <li className='parent'>
                    <a href='#'>Item 2 </a>
                    <label className='toggle' for='toggle-level-2-01'>
                        o
                    </label>
                    <input type='checkbox' id='toggle-level-2-01' />
                    <ul className='level-two'>
                        <li>
                            <a href='#'>Child 1</a>
                        </li>
                        <li>
                            <a href='#'>Child 2</a>
                        </li>
                        <li className='parent'>
                            <a href='#'>Child 3</a>
                            <label className='toggle' for='toggle-level-3-01'>
                                o
                            </label>
                            <input type='checkbox' id='toggle-level-3-01' />
                            <ul className='level-three'>
                                <li>
                                    <a href='#'>Grandchild 1</a>
                                </li>
                                <li className='parent'>
                                    <a href='#'>Grandchild 2</a>
                                    <label className='toggle' for='toggle-level-4-01'>
                                        o
                                    </label>
                                    <input type='checkbox' id='toggle-level-4-01' />
                                    <ul className='level-four'>
                                        <li>
                                            <a href='#'>Grandgrandchild 1</a>
                                        </li>
                                        <li>
                                            <a href='#'>Grandgrandchild 2</a>
                                        </li>
                                        <li>
                                            <a href='#'>Grandgrandchild 3</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='parent'>
                    <a href='#'>Item 3</a>
                    <label className='toggle' for='toggle-level-2-02'>
                        o
                    </label>
                    <input type='checkbox' id='toggle-level-2-02' />
                    <ul className='level-two'>
                        <li>
                            <a href='#'>Child 1</a>
                        </li>
                        <li>
                            <a href='#'>Child 2</a>
                        </li>
                        <li className='parent'>
                            <a href='#'>Child 3</a>
                            <label className='toggle' for='toggle-level-3-02'>
                                o{" "}
                            </label>
                            <input type='checkbox' id='toggle-level-3-02' />
                            <ul className='level-three'>
                                <li>
                                    <a href='#'>Grandchild 1</a>
                                </li>
                                <li>
                                    <a href='#'>Grandchild 2</a>
                                </li>
                                <li>
                                    <a href='#'>Grandchild 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>Child 4</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href='#'>Item 4</a>
                </li>
                <li>
                    <a href='#'>Item 5</a>
                </li>
                <li>
                    <a href='#'>Item 6</a>
                </li>
            </ul>
        </div>
    );
};

export default MenuMobile;
