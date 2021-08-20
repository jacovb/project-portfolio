import React from 'react';

export default function Project({name, description}) {
  return (
    <>
      <h3>{name}</h3>
      <div>{description}</div>
    </>
  )
}