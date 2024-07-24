"use client"

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Ban, Check, Loader2, Plus, Zap } from "lucide-react";
import axios from "axios";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { db } from "@/lib/db";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    }),
    designation: z.string().min(1, {
        message: "Designation is required",
    }),
    description: z.string().min(1, {
        message: "Description is required",
    }),
    imageUrl: z.string().nullable(),
});

const CommitteeMemberForm = () => {
    const [imgUrl, setImgUrl] = useState('');
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            designation: "",
            description: "",
            imageUrl: ""
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post('/api/committee', values).then(()=> alert("Committee member is updated successfully!"))
            form.reset();
            setImgUrl('');
            router.refresh();
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="w-[600px] mt-16 bg-slate-100 px-8 pt-4 pb-6 rounded-lg border">
            <h1 className="w-full text-center text-xl font-semibold">Add the commitee member</h1>
            <Separator  className="mt-6 mb-4"/>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-8 mt-4"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base">
                                    Commitee member name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isSubmitting}
                                        placeholder="Enter the name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base">
                                    Designation
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isSubmitting}
                                        placeholder="Enter the designation"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base">
                                    Description
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isSubmitting}
                                        placeholder="Enter the description"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div>
                        <FormLabel className="text-base">
                            Profile Image
                        </FormLabel>
                        {imgUrl ? 
                            <Image
                                src={imgUrl}
                                alt="Upload"
                                width={100}
                                height={100}
                                className="rounded-md"
                            />
                        :
                            <FileUpload
                                endpoint="imageUploader"
                                onChange={(url) => {
                                    if (url) {
                                        setImgUrl(url);
                                        form.setValue("imageUrl", url);
                                    }
                                }}
                            />
                        }
                    </div>
                    <div className="flex justify-between gap-2">
                        <Button variant='outline' className="flex gap-2 pr-5 text-slate-600 hover:border-slate-300" onClick={() => { form.reset(); setImgUrl(''); }}>
                            Reset
                        </Button>
                        <Button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            className="flex gap-2 pr-5"
                        >
                            <Zap className={cn("w-5 h-5", isSubmitting && "hidden")} />
                            <Loader2 className={cn("animate-spin w-5 h-5 hidden", isSubmitting && "flex")} />
                            Save
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default CommitteeMemberForm