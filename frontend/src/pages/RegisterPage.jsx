import { Button, Card, Input, Label } from '../components/ui'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { signup, errors: signupErrors } = useAuth()

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        const user = await signup(data)
        if (user) {
            navigate('/profile')
        }
    })

    return (
        <div className='h-[calc(100vh-64px)] flex items-center justify-center'>
            <Card>
                {
                    signupErrors && (
                        signupErrors.map(err => (
                            <p className="bg-red-500 text-white p-2 text-center">{err}</p>
                        ))
                    )
                }

                <h3 className='text-4xl font-bold my-2 pb-2 text-center'>Register</h3>
                <form onSubmit={onSubmit}>
                    <Label htmlFor="name">Name</Label>
                    {
                        errors.name && <p className="text-red-500">Name is required</p>
                    }
                    <Input placeholder="Enter your fullname"
                        {...register('name', { required: true })} />

                    <Label htmlFor="email">Email</Label>
                    {
                        errors.email && <p className="text-red-500">Email is required</p>
                    }
                    <Input type="email" placeholder="Enter your email"
                        {...register('email', { required: true })} />

                    <Label htmlFor="password">Password</Label>
                    {
                        errors.password && <p className="text-red-500">Password is required</p>
                    }
                    <Input type="password" placeholder="Enter your password"
                        {...register('password', { required: true })} />

                    <Button>Register</Button>

                    <div className='flex justify-between my-4'>
                        <p>Already have an account?</p>
                        <Link to="/login" className="font-bold ml-1">Login</Link>
                    </div>
                </form>
            </Card>
        </div>
    )
}


export default RegisterPage