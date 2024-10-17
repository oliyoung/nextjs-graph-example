'use client';

import { Button, Input, Stack, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { DialogBackdrop, DialogBody, DialogContent, DialogFooter, DialogRoot, DialogTitle, DialogTrigger, DialogHeader } from '@/components/ui/dialog';
import { Field } from "@/components/ui/field"
import { useForm } from "react-hook-form"

interface FormValues {
    username: string
    jobTitle: string
}

const UserProfile = () => {
    const [user, setUser] = useLocalStorage<FormValues>('user', { jobTitle: '', username: '' })
    const { open, onOpen, onClose } = useDisclosure()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const onSubmit = handleSubmit((data) => {
        setUser({ username: data.username, jobTitle: data.jobTitle })
        onClose()
    })

    useEffect(() => {
        if (!user.username) {
            onOpen()
        }
    }, [user]);

    return <DialogRoot centered motionPreset="slide-in-bottom" open={open} onOpenChange={() => open ? onClose() : onOpen()} >
        <DialogBackdrop />
        <DialogTrigger />
        <DialogContent>
            <form onSubmit={onSubmit}>
                <DialogHeader>
                    <DialogTitle>User Profile</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Stack gap="4">
                        <Field
                            label="Username"
                            asterisk
                            helperText="Tell us who you are"
                            invalid={!!errors.username}
                            errorText={errors.username?.message}>
                            <Input variant="filled" {...register("username", { required: "Username is required" })} />
                        </Field>
                        <Field label="Job Title"
                            asterisk
                            helperText="Tell us what you do"
                            invalid={!!errors.jobTitle}
                            errorText={errors.jobTitle?.message}>
                            <Input variant="filled" {...register("jobTitle", { required: "Job title is required" })} />
                        </Field>
                    </Stack>
                </DialogBody>
                <DialogFooter>
                    <Button type="submit" onClick={onSubmit}>Submit</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </DialogRoot>
}

export default UserProfile;