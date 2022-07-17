/**
 * path = "/" or "/home/feature1"
 */
import { useState } from 'react';
 import style from './feature.module.css'
 import cv1 from "../../../docs/1.png"
import cv2 from "../../../docs/2.png"
import pdfCV from "../../../docs/1.pdf"

import zoomIn from '../../../image/zoomin.svg'
import zoomOut from '../../../image/zoomout.svg'
import Download from '../../../image/download.svg'


 export default function FeaturePage5(){
    const [scale , setScale] = useState(80);
        return <div className={style.AboutPage}>
        <h1>
        <div className={style.myselftext}>Mine</div>{" "}
        <div className={style.waivyText}>Resume</div>
      </h1>
        <div className={style.gridParent}>


        <div className={style.actionContainer}>
            <img src={zoomIn} alt="zoomIn" onClick={
                () => {
                    scale < 110 ? setScale(scale + 10) : setScale(110);
                }
            }/>
            <img src={zoomOut} alt="zoomOut"
            onClick={
                () => {
                    scale > 50 ? setScale(scale - 10) : setScale(50);
                }
            }
            />
            <img src={Download} alt="Download" onClick={
                () => {
                    window.open(pdfCV , '_blank')
                }
            }/>
        </div>

            <img src={cv1} alt='1' style={{width:`${scale}%` , alignSelf:'center'}}/>
            <img src={cv2} alt='2' style={{width:`${scale}%` , alignSelf:'center'}}/>
        </div>

     </div>
 }
  