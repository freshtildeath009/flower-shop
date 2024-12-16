<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Admin Product') }}
        </h2>
    </x-slot>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <div class="flex justify-between items-center">
                        <h1 class="mb-0 text-3xl">List Product</h1>
                        <a href="{{ route('admin/products/create') }}"
                            class="p-2 bg-blue-700 w-fit rounded text-gray-100">Add Product</a>
                    </div>
                    <hr>
                    @if (Session::has('success'))
                        <div class="p-5 bg-green-400" role="alert">
                            {{ Session::get('success') }}
                        </div>
                    @endif
                    table content
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
