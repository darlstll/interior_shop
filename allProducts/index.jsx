import React from 'react'
import { BedBathProduct } from '../bedBathProduct'
import { DecorProduct } from '../decorProduct'
import { FurnitProduct } from '../furnitProduct'
import { GardenProduct } from '../gardenProduct'
import { Kitchen } from '../kitchen'
import { LivingRoom } from '../livingRoom'
import { DiningRoom } from '../diningRoom'
import { HomeOffice } from '../homeOffice'
import { BedRoom } from '../bedRoom'

export const AllProducts = () => {
  return (
    <div>
      <DecorProduct/>
      <FurnitProduct/>
      <BedBathProduct/>
      <GardenProduct/>
      <LivingRoom/>
      <Kitchen/>
      <DiningRoom/>
      <HomeOffice/>
      <BedRoom/>
    </div>
  )
}
