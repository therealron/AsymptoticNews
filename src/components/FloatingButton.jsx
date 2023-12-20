import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

// Modal.setAppElement('#root') // Set the root element for screen reader accessibility

const FloatingButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }
  return (
    <Link to="/createstart">
      {/* <div> */}
      <StyledButtonWrapper
        className="floating-button fixed text-white m:auto rounded"
        onClick={openModal}
      >
        Create your own?
      </StyledButtonWrapper>

      {/* <div className="bg-black">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel=""
          >
            <StyledContainer className="big-buttons-container">
              <StyledBigButton>Create</StyledBigButton>

              <StyledBigButton>Request</StyledBigButton>

              <StyledBigButton
                onClick={() => {
                  setModalIsOpen(false)
                }}
              >
                Close
              </StyledBigButton>
            </StyledContainer>
          </Modal>
        </div>
      </div> */}
    </Link>
  )
}

export default FloatingButton

const StyledButtonWrapper = styled.div`
  position: fixed;
  background-color: #6366f1;
  bottom: 20px; /* Adjust the distance from the bottom as needed */
  left: 48%;
  color: #fff;
  padding: 15px 40px;
  border-radius: 5px;
  cursor: pointer;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center; /* Space buttons evenly within the container */
  align-items: center; /* Center buttons vertically within the container */
  margin: auto;
  background-color: red;
`

const StyledBigButton = styled.button`
  flex: 1; /* Make both buttons equally share the available space */
  font-size: 50px;
  padding: 50;
  background-color: #6366f1;
  margin: auto;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
