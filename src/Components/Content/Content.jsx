import React from 'react'
import "./Content.css"
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from '@mui/material';
import { borderRadius } from '@mui/system';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

function Content() {
  return (
    <div className='container'>
      <div className='leftSide'>
            <div className='firtSection'>
                <HomeIcon sx={{color:"#0571ed"}}></HomeIcon>
                <span className='textHome'>Ana Sayfa</span>
            </div>
            <div className='secondSection'>
                <Avatar sx={{ width: 24, height: 24 }} src='https://scontent.fesb8-1.fna.fbcdn.net/v/t1.6435-1/191383811_492660661988082_8373740820151073203_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=YV-rh8-hPAkAX_gMI1R&_nc_ht=scontent.fesb8-1.fna&oh=00_AT-lNGO3QrFpb8tz93E7xy3drDMtyKPtMN1SdQsaN7ubZg&oe=63799D81'></Avatar>
                <span className='textHome'>Ömer Yurtseven</span>
            </div>
            

      </div>
      <div className='middleSection'>
        <div className='neDusun'>
            <div className='title'>
                <Avatar  src='https://scontent.fesb8-1.fna.fbcdn.net/v/t1.6435-1/191383811_492660661988082_8373740820151073203_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=YV-rh8-hPAkAX_gMI1R&_nc_ht=scontent.fesb8-1.fna&oh=00_AT-lNGO3QrFpb8tz93E7xy3drDMtyKPtMN1SdQsaN7ubZg&oe=63799D81'></Avatar>
                <input style={{height:"40px", width:"576px", outline:"none",border:"none" ,backgroundColor:"#f0f2f5", borderRadius:"20px",textIndent:"10px"}}  type="text" placeholder='Ne düşünüyorsun, Ömer?'/>
            </div>
            <hr style={{width:"632px" ,height:"1px", backgroundColor:"#e4e6eb",border:"none" }}></hr>
            <div className='bottomsct'>
                <div className='itemne'>
                    <svg style={{height:"24px", width:"24px" }} fill="#f3425f" viewBox="0 0 24 24" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xmw33a7 xxk0z11 xvy4d1p"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z" transform="translate(354 158.5)"></path><path d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5" transform="translate(354 158.5)"></path></g></g></svg>
                    <span>Canlı Video</span>
                </div>
                <div className='itemne'>

                    <svg style={{height:"24px", width:"24px" }} fill="#45bd62" viewBox="0 0 24 24" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xdb1l0v xxk0z11 xvy4d1p"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z" transform="translate(352 156.5)"></path><path fill-rule="nonzero" d="m111.61 22.963-11.604-1.015a2.77 2.77 0 0 1-2.512-2.995L98.88 3.09A2.77 2.77 0 0 1 101.876.58l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37l-11.604-1.014a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z" transform="translate(352 156.5)"></path></g></g></svg>
                    <span>Fotoğraf/Video</span>
                </div>
                <div className='itemne'>
                    <svg style={{height:"24px", width:"24px" }} fill="#f7b928" viewBox="0 0 24 24" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xedzdh8 xxk0z11 xvy4d1p"><g fill-rule="evenodd" transform="translate(-444 -156)"><g><path d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z" transform="translate(353.5 156.5)"></path><path fill-rule="nonzero" d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z" transform="translate(353.5 156.5)"></path><path d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192" transform="translate(353.5 156.5)"></path></g></g></svg>
                    <span>Feelings/Activity</span>
                </div>
                
            </div>
        </div>
        <div>
        
        </div>
        <div className='post'>
              <div className='NameSection'>
                <Avatar  src='https://scontent.fesb8-1.fna.fbcdn.net/v/t1.6435-1/191383811_492660661988082_8373740820151073203_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=YV-rh8-hPAkAX_gMI1R&_nc_ht=scontent.fesb8-1.fna&oh=00_AT-lNGO3QrFpb8tz93E7xy3drDMtyKPtMN1SdQsaN7ubZg&oe=63799D81'></Avatar>
                <div className='NameDate'>
                    <span style={{fontSize:"15px" , fontWeight:"600", lineHeight:"20px"}}>Ömer Yurtseven</span>
                    <span>18 Ekim, 22:35 </span>
                </div>
              </div>
              <div className='picture'>
                <img src="https://scontent.fesb8-1.fna.fbcdn.net/v/t39.30808-6/309464677_5502190469864959_482205004166808899_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=g1KrUgwbCa8AX-LRO9G&_nc_ht=scontent.fesb8-1.fna&oh=00_AT9DMdQfYACyNoekxJuCfDGPY6anZ3pNpAmT_nb_6QUbJg&oe=635A53B5" alt="" />
              </div>
              <div className='liked'>
                <img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt='like' width="18"/>
                <span>22</span>
                <span style={{marginLeft:"auto" , marginRight:"15px"}}>21 Yorum</span>
              </div>
              <hr style={{width:"632px" ,height:"1px", backgroundColor:"#e4e6eb",border:"none" }} />
              <div className='lastt'>
                <div className='lastt1'>
                  <ThumbUpOutlinedIcon sx={{color:"#797f86"}} fontSize="small"/>
                  <span>Beğen</span>
                </div>
                <div className='lastt2'>
                  <ChatBubbleOutlineOutlinedIcon sx={{color:"#797f86"}} fontSize="small"></ChatBubbleOutlineOutlinedIcon>
                  <span>Yorum Yap</span>
                </div>
                
              </div>
              <hr style={{width:"632px" ,height:"1px", backgroundColor:"#e4e6eb",border:"none" }} />


        </div>  
      </div>
      
      <div></div>
    </div>
  )
}

export default Content
