import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchPage} from '../actions/index';
import { getLocationFromParams } from '../utils/index';
import backgroundImage from '../images/about/factory_opaque.jpg';
import moleculeIcon from '../images/about/molecule-icon.png';
import recycleIcon from '../images/about/recycle-icon.png';
import burnIcon from '../images/about/burn-icon.png';
import industryIcon from '../images/about/industry-icon.png';
import companyCultureImage from '../images/about/company-culture.jpg';


const basicIntroData = {
    'zh': {
        'head': '公司简介',
        'body': [
            '江苏智道工程技术有限公司是以新技术工程产业化应用为核心，集创发、设计、核心制造、工程总承包、维运为一体的节能环保专业工程公司。',
            '公司专注于系统能量、有效成份回收利用及净化处理达标排放一体优化、总承包实施并持续改进提升。是国家高新技术企业、江苏省专精特新企业、江苏省工业硫-碳循环利用与资源化工程技术研究中心。致力于为大型石化、钢铁等高耗能行业客户提供节能、减排、降碳的绿色解决方案和远程智能运维服务。近年来响应国家关于碳达峰碳中和的重要战略部署，积极推进双碳相关技术研发，已启动位于南京溧水智道总部·“双碳”创发中心工程，打造绿色低碳、工业节能降碳等方面产学研一体的双碳研发基地。',
            '公司是国家发改委备案的第五批节能服务公司，国家工信部工业节能诊断服务提供单位，南京节能环保产业协会会长单位、江苏省能源研究会副理事长单位、中美绿色合作计划成员，南京市工程技术研究中心，设有江苏省研究生工作站，连续两年获得南京市成长型50强企业。科技净化环境，与客户共成功；大家智道，感恩有您！'
        ]
    },
    'en': {
        'head': '公司简介',
        'body': [
            '江苏智道工程技术有限公司是以新技术工程产业化应用为核心，集创发、设计、核心制造、工程总承包、维运为一体的节能环保专业工程公司。',
            '公司专注于系统能量、有效成份回收利用及净化处理达标排放一体优化、总承包实施并持续改进提升。是国家高新技术企业、江苏省专精特新企业、江苏省工业硫-碳循环利用与资源化工程技术研究中心。致力于为大型石化、钢铁等高耗能行业客户提供节能、减排、降碳的绿色解决方案和远程智能运维服务。近年来响应国家关于碳达峰碳中和的重要战略部署，积极推进双碳相关技术研发，已启动位于南京溧水智道总部·“双碳”创发中心工程，打造绿色低碳、工业节能降碳等方面产学研一体的双碳研发基地。',
            '公司是国家发改委备案的第五批节能服务公司，国家工信部工业节能诊断服务提供单位，南京节能环保产业协会会长单位、江苏省能源研究会副理事长单位、中美绿色合作计划成员，南京市工程技术研究中心，设有江苏省研究生工作站，连续两年获得南京市成长型50强企业。科技净化环境，与客户共成功；大家智道，感恩有您！'
        ]
    }
}

const coreProductsData = {
    'head': {
        'zh': '核心技术支撑',
        'en': '核心技术支撑'
    },
    'body': [
        {
            'imageUrl': moleculeIcon,
            'zh': '膜技术工程应用',
            'en': '膜技术工程应用',
            'link': '/mission/membrane/tech'
        },
        {
            'imageUrl': recycleIcon,
            'zh': '油气回收、VOCs治理',
            'en': '油气回收、VOCs治理',
            'link': '/mission/voc/tech'
        },
        {
            'imageUrl': burnIcon,
            'zh': '脱硫脱硝技术',
            'en': '脱硫脱硝技术',
            'link': '/mission/desulph/tech'
        },
        {
            'imageUrl': industryIcon,
            'zh': '能量综合利用',
            'en': '能量综合利用',
            'link': '/mission/comprehensive/tech'
        }
    ]
}

const companyCultureData = {
    'head': {
        'zh': '企业文化',
        'en': '企业文化'
    },
    'subhead': {
        'zh': '价值观',
        'en': '价值观'
    },
    'body': [
        {
            'zh': {
                'keyword': '责任关爱',
                'text': '是企业、个人成功的基础，是企业长久不衰的法宝，在工作中做到互信、互相尊重、有责任和担当，兼顾家庭与工作的关系。'
            },
            'en': {
                'keyword': '责任关爱',
                'text': '是企业、个人成功的基础，是企业长久不衰的法宝，在工作中做到互信、互相尊重、有责任和担当，兼顾家庭与工作的关系。'
            },
        },
        {
            'zh': {
                'keyword': '业绩团队',
                'text': '业绩是决定奖励和升迁的重要标准，团队业绩高于一切，优秀的团队和员工得到高的报酬和奖励。'
            },
            'en': {
                'keyword': '业绩团队',
                'text': '业绩是决定奖励和升迁的重要标准，团队业绩高于一切，优秀的团队和员工得到高的报酬和奖励。'
            },
        },
        {
            'zh': {
                'keyword': '创新变革',
                'text': '技术创新，永不满足，管理变革，永保活力，总是从业绩创新、从头做起，创新变革带来机遇与动力，推动企业不断发展。'
            },
            'en': {
                'keyword': '创新变革',
                'text': '技术创新，永不满足，管理变革，永保活力，总是从业绩创新、从头做起，创新变革带来机遇与动力，推动企业不断发展。'
            },
        },
        {
            'zh': {
                'keyword': '简约乐观',
                'text': '越简约越有效，细节决定成败，乐观面对艰难，办法总比困难多'
            },
            'en': {
                'keyword': '简约乐观',
                'text': '越简约越有效，细节决定成败，乐观面对艰难，办法总比困难多'
            },
        }
    ]
}

const BasicIntro = (props) => {
    const { language } = props;
    return (
        <div className="container component-container">
            <h1 className="text-center chinese-section-header">{basicIntroData[language].head}</h1>
            {basicIntroData[language].body.map((bodyItem, index) => 
                <p key={index} className="chinese-section-body">{bodyItem}</p>
            )}
        </div>
    )
}

class SinglCoreProduct extends React.Component {
    state = {
        productIndex: 0
    }

    componentDidMount() {
        this.setState({
            productIndex: this.props.index
        })
    }

    updatePath = (newPath) => {
        newPath = getLocationFromParams(newPath)
        this.props.switchPage(newPath)
    }

    render() {
        const { language, product } = this.props;
        const borderStyle = this.state.productIndex !== 0 ? 'with-border-img' : 'no-border-img';
        return (
            <Col md={3} sm={6} xs={6} className='column-padding'>
                <Link to={product.link} onClick={() => this.updatePath(product.link)}>
                    <div className={borderStyle}>
                        <img className='img-responsive' src={product.imageUrl} alt={product[language]} />
                        <p className="text-center white chinese-section-body">{product[language]}</p>
                    </div>
                </Link>
            </Col>
        )
    }
}


const CoreProducts = (props) => {
    const { language, switchPage } = props;
    return (
        <div className="background-loaded" style={styles.background}>
            <h1 className="text-center white chinese-section-header">{coreProductsData.head[language]}</h1>
            <Row>
                <div className=" container padding-on-big">
                    {coreProductsData.body.map((product, index) => 
                        <SinglCoreProduct 
                            key={index} 
                            product={product} 
                            language={language}
                            index={index}
                            switchPage={switchPage}
                        />
                    )}
                </div>
            </Row>
        </div>
    )
}

const CompanyCulture = (props) => {
    const { language } = props;
    return (
        <div className="container component-container" style={{paddingBottom: 20}}>
            <h1 className="text-center chinese-section-header">{companyCultureData.head[language]}</h1>
            <Row style={{paddingTop: 20}}>
                <Col md={5}>
                    <h1 style={styles.headerChineseBlue}>{companyCultureData.subhead[language]}</h1>
                    {companyCultureData.body.map((companyValue, index) => 
                        <p key={index} className="chinese-section-body">
                            <span style={{fontSize: 24, fontFamily: "PingFangSC-Semibold"}}>{companyValue[language].keyword} </span>
                            {companyValue[language].text}
                        </p>
                    )}
                </Col>
                <Col md={1}/>
                <Col md={6}>
                    <img className="img-responsive" src={companyCultureImage} style={{width: "100%"}} alt="企业文化" />
                </Col>
            </Row>
        </div>
    )
}


const CompanyAbout = (props) => {
    const { language, switchPage } = props;
    return (
        <div>
            <BasicIntro language={language} />
            <CoreProducts language={language} switchPage={switchPage} />
            <CompanyCulture language={language} />
        </div>
    )
}

const styles = {
    background: {
        backgroundImage: 'url(' + backgroundImage + ')',
        paddingTop: 30,
        paddingBottom: 30
      },

    headerChineseBlue: {
        fontSize: 24,
        fontFamily: "PingFangSC-Semibold",
        color: '#4495CD',
        paddingBottom: 20
    },
}

function mapStateToProps(state) {
  return {
      page: state.page
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({switchPage: switchPage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CompanyAbout);