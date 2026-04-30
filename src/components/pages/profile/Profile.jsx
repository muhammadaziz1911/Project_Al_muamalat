import React from 'react'

const Profile = () => {

  const { data, isLoadin } = useQuery({
    queryKey: ['userData'],
    queryFn: () => request.get('/users/me').then((res) => res.data)
  })

  const { data: userData, isLoading } = useQuery({
    queryKey: ['userData'],
    queryFn: () => request.get('/users/me').then((res) => res.data)
})

const { register, handleSubmit, formState: { errors } } = useForm()

const { mutate } = useMutation({
    mutationKey: ['user', userData?.data?.user_id],
    mutationFn: (data) => request.put(`/users/${userData?.data?.user_id}`, data),
    onSuccess: () => {
        toast.success('User updated successfully')
    },
    onError: () => {
        toast.error('User updated failed')
    }
})

const onSubmit = (data) => {
    mutate(data)
}


  return (
    <div>
      
      <div className="user_profile">

        <div className="user_image">
          <img src="" alt="user_image" />
        </div>

        <div className="user_icon">
          
        </div>

      </div>

    </div>
  )
}

export default Profile
