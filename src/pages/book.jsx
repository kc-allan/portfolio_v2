import React, { useState } from 'react';

const BookAppointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }
}

export default BookAppointment;