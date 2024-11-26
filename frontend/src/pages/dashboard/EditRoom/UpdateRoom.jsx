import { useEffect } from 'react'
import InputField from '../addRoom/InputField';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchRoomByIdQuery,useUpdateRoomMutation } from '../../../redux/features/rooms/roomApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseURL';

const UpdateRoom = () => {
  const { id } = useParams();
  const { data: roomData, isLoading, isError, refetch } = useFetchRoomByIdQuery(id);
  // console.log(bookData)
  const [updateBook] = useUpdateRoomMutation();
  const { register, handleSubmit, setValue, reset } = useForm();
  useEffect(() => {
    if (roomData) {
      setValue('room_type', roomData.room_type);
      setValue('amenities', roomData.amenities);
      setValue('price_per_night', roomData.price_per_night);
      setValue('price_per_night', roomData.price_per_night);
      setValue('photos', roomData.photos)
    }
  }, [roomData, setValue])

  const onSubmit = async (data) => {
    const updateBookData = {
      room_type: data.room_type,
      amenities: data.amenities,
      price_per_nighte: Number(data.price_per_night),
      price_per_night: Number(data.price_per_night),
      photos: data.photos || roomData.photos,
    };
    try {
      await axios.put(`${getBaseUrl()}/api/rooms/edit/${id}`, updateBookData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      Swal.fire({
        title: "Book Updated",
        text: "Your book is updated successfully!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!"
      });
      await refetch()
    } catch (error) {
      console.log("Failed to update book.");
      alert("Failed to update book.");
    }
  }
  if (isLoading) return <Loading />
  if (isError) return <div>Error fetching book data</div>
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          name="room_type"
          placeholder="Enter book title"
          register={register}
        />

        <InputField
          label="Description"
          name="amenities"
          placeholder="Enter book description"
          type="textarea"
          register={register}
        />

        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          placeholder="Old Price"
          register={register}
        />

        <InputField
          label="New Price"
          name="price_per_night"
          type="number"
          placeholder="New Price"
          register={register}
        />

        <InputField
          label="photos"
          name="photos"
          type="text"
          placeholder="Cover Image URL"
          register={register}
        />

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
          Update Book
        </button>
      </form>
    </div>
  )
}

export default UpdateRoom