"use client"
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [IdTicket, setIdTicket] = useState(null as number | null);
  useEffect(function () {
    if (location) {
      var searchParams = new URLSearchParams(location.search);
      var id = Number(searchParams.get('IdTicket'));
      setIdTicket(id);
    }
  }, [])
  return (
    <div>
      <div>{IdTicket}</div>
    </div>
  );
}

export default Page;
