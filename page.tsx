'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';

const CHECKOUT_URL = 'https://SEU-CHECKOUT-AQUI';

export default function Page() {
  const [img, setImg] = useState('/1000005527.jpg');
  const [time, setTime] = useState(900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => (t > 0 ? t - 1 : 900));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const m = String(Math.floor(time / 60)).padStart(2, '0');
  const s = String(time % 60).padStart(2, '0');

  return (
    <>
      <Head>
        <title>Tupperwars® | Organização Premium para sua Cozinha</title>
        <meta
          name="description"
          content="Conjunto Hermético Tupperwars® com 28 peças. Organização, saúde e praticidade para sua família. Oferta de Natal por tempo limitado."
        />
        <meta property="og:title" content="Tupperwars® | Oferta Especial de Natal" />
        <meta property="og:description" content="Transforme sua cozinha com organização premium." />
        <meta property="og:image" content="/1000005527.jpg" />
      </Head>

      <style>{
        body { margin:0;font-family:Roboto;background:#f2f2f2;color:#222 }
        header { background:#fff;padding:30px;text-align:center;border-bottom:1px solid #ddd }
        .promo { background:#c40000;color:#fff;padding:6px 14px;display:inline-block;font-weight:700 }
        .timer { background:#8a0000;color:#fff;text-align:center;padding:12px;font-weight:bold }
        .wrap { max-width:1200px;margin:40px auto;background:#fff;padding:30px;display:grid;grid-template-columns:420px 1fr;gap:40px }
        .thumbs { display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:10px }
        .thumbs img { border:1px solid #ccc;cursor:pointer }
        .price { border:2px solid #ffe58f;background:#fffbe6;padding:20px;margin:20px 0 }
        .btn { background:linear-gradient(to right,#f57224,#f83600);color:#fff;padding:18px;border:none;width:100%;font-size:18px;font-weight:800;cursor:pointer }
        footer { background:#333;color:#ccc;text-align:center;padding:25px;margin-top:40px }
        @media(max-width:900px){ .wrap{grid-template-columns:1fr} }
      }</style>

      <header>
        <span className="promo">🎄 LIQUIDAÇÃO DE NATAL</span>
        <h1>Tupperwars® Premium</h1>
        <p>Organização, cuidado e praticidade para sua cozinha</p>
      </header>

      <div className="timer">
        ⚡ OFERTA EXPIRA EM 00:{m}:{s}
      </div>

      <main className="wrap">
        <div>
          <img src={img} width="100%" alt="Tupperwars" />
          <div className="thumbs">
            {['5527','5526','5524','5523','5522'].map(n => (
              <img key={n} src={/100000${n}.jpg} onClick={() => setImg(/100000${n}.jpg)} />
            ))}
          </div>
        </div>

        <div>
          <h2>Conjunto Hermético Tupperwars® – 28 Peças</h2>
          <p>
            Pensado para mulheres que valorizam organização, saúde e praticidade no dia a dia.
          </p>

          <div className="price">
            <div>De <del>R$ 189,90</del></div>
            <h1 style={{color:'#c40000'}}>R$ 89,99</h1>
            <small>ou 12x de R$ 9,00</small>
          </div>

          <ul>
            <li>✔ Livre de BPA</li>
            <li>✔ Vedação 100% hermética</li>
            <li>✔ Micro-ondas e freezer</li>
            <li>✔ Organização profissional</li>
          </ul>

          <button className="btn" onClick={() => window.location.href = CHECKOUT_URL}>
            COMPRAR AGORA
          </button>

          <p style={{fontSize:12,marginTop:10}}>
            🔒 Pagamento seguro • Garantia de 30 dias
          </p>
        </div>
      </main>

      <footer>
        © 2025 Tupperwars® • Todos os direitos reservados
      </footer>
    </>
  );
}
