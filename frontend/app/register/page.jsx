'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

  
  const handleRegister = async e => {
    e.preventDefault()

    try {
      const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Kayıt başarısız.')
      }

      setSuccess(data.message)
      // opsiyonel: kayıt sonrası otomatik /login sayfasına yönlendir
      setTimeout(() => router.push('/login'), 1500)
    } catch (err) {
      setError(err.message)
    }
  }
  return (
    <div>
      <div className="top-bar">
        <button onClick={e => router.push('./home')}
            style={{ cursor: 'pointer' }}>
          <span className='top-bar-text' > ODemi </span>
        </button>
      </div>
      <div className="centerDIV">
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', margin: '20px', textAlign: 'center' }}>
          Kayıt Ol
        </h1>

        <form onSubmit={handleRegister} >
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="logTextbox"
          />
          <br/>
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="logTextbox"
          />
          <br/>
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="logTextbox"
          />
          <br/>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" className="logButton" onClick={handleRegister} >Kayıt Ol</button>
          </div>
        </form>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px'
          }} >
            <span style={{ fontSize: '10px' }}>Zaten hesabın var mı?</span>
            <button className="textButton" onClick={e => router.push('./login')} > Giriş Yap </button>
        </div>
      </div>
    </div>
  )
}
