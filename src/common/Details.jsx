import React from 'react';
import './details.scss';
import { useParams } from 'react-router-dom';
import DETAILS from '../constants/details';
import { IoHomeSharp, IoChevronForwardOutline } from 'react-icons/io5';

export const Details = () => {
    const { name } = useParams();
    const details = DETAILS.find((e) => e.name === name) || {};
    return (
        <>
            <div className="details__header">
                <a href="/" className="details__header__home">
                    <IoHomeSharp style={{ marginRight: 12 }} /> Go Home
                </a>
                <a href={`/${name}`} className="details__header__project">
                    Go to Project{' '}
                    <IoChevronForwardOutline style={{ marginLeft: 12 }} />
                </a>
            </div>
            <div className="details__cont">
                <div className="details__title">
                    {details?.title || 'No name'}
                </div>
                <div className="details__description">
                    {details.description || 'No description'}
                </div>
                <div className="details__functional">
                    <div className="details__functional__header">
                        Функционал
                    </div>
                    {details?.functional?.length ? (
                        <ul>
                            {details.functional.map((text, index) => (
                                <li key={index}>{text}</li>
                            ))}
                        </ul>
                    ) : (
                        'No functional'
                    )}
                </div>
                <div className="details__additional">
                    <div className="details__additional__header">
                        Дополнительно:
                    </div>
                    {details?.additional?.length
                        ? details.additional.map((additional) => (
                              <div
                                  key={additional.title}
                                  className="details__additional__block">
                                  <div className="details__additional__block__title">
                                      {additional?.title || ''}
                                  </div>
                                  <div className="details__additional__block__text">
                                      {additional?.text || ''}
                                  </div>
                              </div>
                          ))
                        : 'No additional'}
                </div>
            </div>
        </>
    );
};
