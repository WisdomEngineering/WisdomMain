import React from 'react';
import { Image } from 'react-bootstrap';

const NewsText = (props) => {
  console.log(props)
  const { data, language } = props;
  console.log(data[0]===true)
  const paragraphs = data[0].text.map((paragraph, index) => 
    <div key={index}>
      <p className="chinese-section-body"><strong>{paragraph.subHead[language]}</strong></p>
      {
        paragraph.subText.map((subItem, idx) => 
        <p style={{textIndent: 35}} className="chinese-section-body" key={idx}>
          {subItem[language]}
        </p>
        )
      }
      {
        paragraph.hasOwnProperty("pdf") &&
        paragraph.pdf.map((pdf, index) => {
          return (
            <div key={index}>
              <a href={pdf.path} download>{pdf.text}</a>
            </div>
          )
        })
      }
      {
        paragraph.hasOwnProperty("videoUrl") &&
        paragraph.videoUrl.map((video, index) => {
          return (
            <video key={index} width="450" style={{maxWidth: '100%', display: 'block', margin: '0 auto'}} controls>
              <source src={video} type="video/mp4" />
                你的浏览器不支持视频。
            </video>
          )
        })
      }
      {
        <div>
        {paragraph.imgUrl.map((image, index) => 
            image.image===null?<div key={index} />:
            <div className="img-container text-center" key={index}>
              <Image src={image.image} alt="" className="center-img upper-margin" width="100%" responsive/>
            {
                image.caption[language]===""?<div></div>:
              <div className="caption">
                <p className="medium-body"><span className="mini-tab" style={styles.tab} /> {image.caption[language]}</p>
              </div>
            }
            </div>
        )}
      </div>
      }      
    </div>
  )

  return (
    <div className="container component-container limited-width">
      <h1 className="text-center chinese-section-header">{data[0].head[language]}</h1>      
        {paragraphs}
    </div>
  )
}

const styles = {
  tab: {
  borderBottomColor: '#2c739d',
  borderLeftColor: '#2c739d',
  borderLeftStyle: 'solid',
  borderLeftWidth: 4.79688,
  borderRightColor: '#2c739d',
  borderTopColor: '#2c739d',
  display: 'inline',
  height: 24,
  marginRight: 8,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  width: 4.79688,
  }
}

export default NewsText;