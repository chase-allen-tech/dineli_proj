import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
// action
import {
  actionAuthActivate,
} from '../../redux/actions/auth'

const Verification = () => {
  const dispatch = useDispatch()
  const { verificationString } = useParams()
  useEffect(() => {
    if (!verificationString || verificationString === '') {
      return
    }
    dispatch(
      actionAuthActivate(verificationString)
    )
  }, [dispatch,verificationString])
  return (
    <>
    </>
  )
}
export default Verification