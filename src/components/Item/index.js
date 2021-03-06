import React, { useState } from 'react'
import typicalBlocks from '~/typicalBlocks'
import { SortableHandle } from 'react-sortable-hoc'
import { Icon, Modal } from 'antd'
import './index.scss'
import { useSelector } from 'react-redux'
/* eslint-disable */
const DragHandleLeft = SortableHandle(() => <Icon className='icon' type='drag' />)

const checkItem = key => {
  switch (key) {
    case 'tb14': return true
    case 'tb15': return true
    case 'tb106': return true
    case 'tb107': return true
    case 'tb108': return true
    case 'tb109': return true
    case 'tb110': return true
    case 'tb111': return true
    default: return false
  }
}



const Item = ({ items, item, ind, listNumber, action, setIsVisibleModal, isVisibleModal, setSelectedNode }) => {

  const list = useSelector(state => state.customReduser)
  return <div className='typicalBlocksItem' style={{ margin: 0, fontFamily: 'Times New Roman', fontSize: 19 }}>
    <div className='wrapper_icon'>
      <DragHandleLeft />
      <Icon onClick={() => action(ind)} className='icon' type='delete' />
    </div>
    <span>{listNumber ? listNumber + '. ' : ''}</span>
    <div onClick={checkItem(item) ? e => {
      let newSelectedNode = e.target.id
      if( newSelectedNode !== '' && newSelectedNode !== 'tb15' && newSelectedNode !== 'tb14' ) {
        setIsVisibleModal(true);
        if (newSelectedNode.length > 5) {
          newSelectedNode = newSelectedNode.slice(0, -2)
        }
        setSelectedNode(newSelectedNode)
            }
    } : null}>
      {list[item].node}
    </div>
  </div >
}

export default Item
