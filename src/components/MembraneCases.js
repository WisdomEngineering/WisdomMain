import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MembraneCases = (props) => {
    const { casesData, language } = props;
    return (
        <div className="container component-container">
            {/* Loop through casesData with step of 2 */}
            {casesData.map((singleCase, index) => {
                if (index % 2 === 0) { // Only process every 2nd index (i.e., 0, 2, 4, ...)
                    return (
                        <Row key={index} className="mb-4">
                            <Col md={6} sm={6}>
                                <div className="img-container text-center" style={{ marginBottom: 20 }}>
                                    <img
                                        className="img-responsive"
                                        src={singleCase.imgUrl}
                                        style={{ width: '100%' }}
                                        alt={singleCase.caption[language]}
                                    />
                                    <div className="caption">
                                        <p className="medium-body">{singleCase.caption[language]}</p>
                                    </div>
                                </div>
                            </Col>

                            {/* Render next item in the same row if it exists */}
                            {casesData[index + 1] && (
                                <Col md={6} sm={6}>
                                    <div className="img-container text-center" style={{ marginBottom: 20 }}>
                                        <img
                                            className="img-responsive"
                                            src={casesData[index + 1].imgUrl}
                                            style={{ width: '100%' }}
                                            alt={casesData[index + 1].caption[language]}
                                        />
                                        <div className="caption">
                                            <p className="medium-body">{casesData[index + 1].caption[language]}</p>
                                        </div>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    );
                } else {
                    return null; // Skip odd-indexed items since they are already handled
                }
            })}
        </div>
    );
}

export default MembraneCases;
