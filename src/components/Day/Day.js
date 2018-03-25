import React, { Component } from 'react';
import "./Day.css";

export const Day = ({ day }) => {
  return (
    <div className="Day">
      <h3>{ day }</h3>
    </div>
  )
}