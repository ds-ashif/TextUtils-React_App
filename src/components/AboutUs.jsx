import React,{useState} from 'react'

export default function AboutUs(props) {
    // const [mystyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    // const [btntxt,setBtnText]=useState("DarkMode")
    // const togglestyle=()=>{
    //     if(mystyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText('LightMode')
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //         })
    //         setBtnText('DarkMode')
    //     }
    // }
    let mystyle={
      color:props.mode==='dark'?'white':'#222',
      backgroundColor: props.mode==='dark'?'#222':'white'
    }
  return (
   
    <>
    
    <h3 className='my-5 w-50 mx-auto'><i>About TextUtils</i></h3>
    <div class="accordion w-75 mx-auto" id="accordionExample" style={mystyle}>
      
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong><i>Analyze your text</i></strong> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
      <strong><i>Welcome to TextUtils</i></strong>, your go-to platform for powerful and efficient text analysis. Whether you're a student, writer, developer, or content creator, my tool is designed to help you gain valuable insights into your text.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" style={mystyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong><i>Free to Use</i></strong> 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
      TextUtils is completely free for everyone. There are no hidden charges or subscriptions. Whether you're analyzing a small snippet or an extensive document, you can enjoy all the features without any cost.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong><i>Browser Compatible</i></strong> 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
      TextUtils is fully compatible with all modern web browsers. Whether you're using Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge, the tool runs smoothly without any issues.
      </div>
    </div>
  </div>
  {/* <div className='container my-3'>
    <button type="button" className="btn btn-primary" onClick={togglestyle}>{btntxt}</button>
  </div> */}
</div>
</>
  )
}
