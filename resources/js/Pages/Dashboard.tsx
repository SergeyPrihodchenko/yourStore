import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Counter from "@/Components/Counter/ui/Counter";
import Pokemon from "@/Components/PokemonList/ui/Pokemon";
import MainLayout from "@/Layouts/MainLayout/MainLayout";


export default function Dashboard({ auth }: PageProps) {

    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
            <MainLayout>
                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">You're logged in!</div>
                            <Counter />
                            <Pokemon />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda corporis dolorem dolorum earum eius harum illum molestiae, nihil non nulla quam quas qui repellat, sequi totam voluptates? Nam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda corporis dolorem dolorum earum eius harum illum molestiae, nihil non nulla quam quas qui repellat, sequi totam voluptates? Nam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda corporis dolorem dolorum earum eius harum illum molestiae, nihil non nulla quam quas qui repellat, sequi totam voluptates? Nam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda corporis dolorem dolorum earum eius harum illum molestiae, nihil non nulla quam quas qui repellat, sequi totam voluptates? Nam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda corporis dolorem dolorum earum eius harum illum molestiae, nihil non nulla quam quas qui repellat, sequi totam voluptates? Nam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda corporis dolorem dolorum earum eius harum illum molestiae, nihil non nulla quam quas qui repellat, sequi totam voluptates? Nam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda corporis dolorem dolorum earum eius harum illum molestiae, nihil non nulla quam quas qui repellat, sequi totam voluptates? Nam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda corporis dolorem dolorum earum eius harum illum molestiae, nihil non nulla quam quas qui repellat, sequi totam voluptates? Nam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda corporis dolorem dolorum earum eius harum illum molestiae, nihil non nulla quam quas qui repellat, sequi totam voluptates? Nam.</p>

                        </div>
                    </div>
                </div>
            </MainLayout>

        // </AuthenticatedLayout>
    );
}
