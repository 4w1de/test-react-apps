import React from 'react';
import './home.scss';
import { FaRegQuestionCircle } from 'react-icons/fa';

export const Home = () => {
    return (
        <div className="home__cont">
            <table>
                <thead>
                    <tr>
                        <td>Project name</td>
                        <td>Link</td>
                        <td>Details</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Table</td>
                        <td>
                            <a href="/table">link</a>
                        </td>
                        <td>
                            <a href="/details/table">
                                <FaRegQuestionCircle />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
