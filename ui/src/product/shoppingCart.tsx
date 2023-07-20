import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Drawer from '@material-ui/core/Drawer'

export const ShoppingCart = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <ShoppingCartIcon style={{ fontSize: '4rem', cursor: 'pointer' }} />
        <button onClick={handleOpenDrawer} style={{ fontSize: '1rem', cursor: 'pointer' }}>
          Open Form
        </button>
      </div>

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleCloseDrawer}>
        <div
          style={{
            width: '300px',
            padding: '20px',
          }}>
          <h3>Total Bill</h3>
        </div>
      </Drawer>
    </>
  )
}
