import React, { useState } from 'react'
import './App.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

function App() {
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [qrCodeLink, setQrCodeLink] = useState('');

  function handleQrCode(e){
    setQrCodeValue(e.target.value);
    handleGenerate(e.target.value);
  }

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3
    }, function(err,url){
      setQrCodeLink(url);
    })
  }

  return (
    <div className='container'>
      <h1>Gerador de Qr Code</h1>
      <div className='qrcode-wrapped'>
      <QRCode value={qrCodeValue} />
      </div>
      <input placeholder='Digite sua URL' className='input' value={qrCodeValue} onChange={(e) => handleQrCode(e)}/>
      <a href={qrCodeLink} download={`qrcode.png`}>Baixar QrCode</a>
    </div>
  )
}

export default App;