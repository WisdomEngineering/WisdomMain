import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AnimationCount from './AnimationCount';

const head = {
    'zh': '社会经济效益',
    'en': 'Societal Economic Benefits'
}

const subHead = {
    'zh': '不仅减少污染物排放、同时为企业带来经济利益',
    'en': 'Not only reducing pollution, but also providing ecomonic benefits'
}

const figures = [
    {
        'zh': '年回收热量折合燃煤',
        'en': 'Some numbers',
        'num': 40000,
        'unit': '吨'
    },
    {
        'zh': '产生年经济效益',
        'en': 'Some numbers',
        'num': 5000,
        'unit': '万元'
    },
    {
        'zh': 'SO2年减排量',
        'en': 'Some numbers',
        'num': 3000,
        'unit': '吨'
    },
    {
        'zh': 'CO2年减排量',
        'en': 'Some numbers',
        'num': 100000,
        'unit': '吨'
    }
]


const SingleStat = (props) => {
    const { fig, language, color } = props;

    const settings = {
        start: fig.num - 800,
        count: fig.num,
        duration: 3000,
        decimals: 0,
        useGroup: true,
        animation: 'up',
    }

    return (
        <div>
            <p
                className={color === "white" ? "light" : "dark"}
                style= {language === "zh" ? styles.chineseBigBodyBlack : styles.bigBody}
            >
                {fig[language]}
                <AnimationCount {...settings}/>
                <span
                    className={color === "white" ? "light" : "dark"}
                    style= {language === "zh" ? styles.chineseBigBodyBlack : styles.bigBody}
                >
                    {fig.unit}
                </span>
            </p>
        </div>
    )
}


const Stats = (props) => {
    const { language, color } = props;
    return(
        <div className="stats-container">
            <Row>
                <Col md={3}>
                    <div style={{borderTop: '15px solid #86B728'}}/>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h1 
                        className={color === "white" ? "light" : "dark"}
                        style= {language === "zh" ? styles.chineseBigHead : styles.englishBigHead}
                    >
                        {head[language]}
                    </h1>
                    <p style={{textAlign: 'left'}, styles.chineseBigBodyBlackSubHead}>
                        {subHead[language]}
                    </p>
                </Col>
                <Col md={6}>
                    {
                        figures.map((fig, idx) => 
                            <SingleStat fig={fig} language={language} color={color} key={idx}/>
                        )
                    }
                </Col>
            </Row>
        </div>
    )
}


export default Stats;


const styles = {
  chineseBigHead: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 42,
    letterSpacing: 0.2,
    marginBottom: 10
  },
  
  englishBigHead: {
    fontWeight: 500,
    fontSize: '2em',
  },
  
  chineseBigBody: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 22,
    letterSpacing: 0.14,
    textAlign: 'center',
    lineHeight: '50px',
    marginTop: '40px !important',
    color: '#86B728'
  },

  chineseBigBodyBlackSubHead: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 22,
    letterSpacing: 0.14,
    textAlign: 'left',
    marginTop: '40px !important',
    color: '#666'
  },

  chineseBigBodyBlack: {
    fontFamily: "PingFangSC-Semibold",
    fontSize: 22,
    letterSpacing: 0.14,
    textAlign: 'center',
    marginTop: '40px !important',
    color: '#666'
  },
  
  bigBody: {
    fontWeight: 100,
    fontSize: 20,
    marginTop: '40px !important',
  },

  white: {
    color: '#FFFFFF !important'
  }
}