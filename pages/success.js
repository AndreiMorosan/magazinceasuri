import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Multumim pentru comanda!</h2>
        <p className="email-msg">Verificati emailul pentru mai multe detalii.</p>
        <p className="description">
          Daca aveti vreo intrebare,va rugam sa ne trimiteti un mesaj la
          <a className="email" href="mailto:order@example.com">
            morosan_andrei20@yahoo.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
           Continuati cumparaturile
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success