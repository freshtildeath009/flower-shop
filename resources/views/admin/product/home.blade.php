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
                    <div class="flex items-center justify-between mb-4">
                        <h1 class="text-2xl font-semibold">List of Products</h1>
                        <a href="{{ route('admin/products/create') }}"
                            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            Add Product
                        </a>
                    </div>
                    <hr class="mb-4">

                    @if (Session::has('success'))
                        <div class="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                            {{ Session::get('success') }}
                        </div>
                    @endif

                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse border border-gray-300">
                            <thead class="bg-gray-200">
                                <tr>
                                    <th class="border border-gray-300 px-4 py-2">#</th>
                                    <th class="border border-gray-300 px-4 py-2">Title</th>
                                    <th class="border border-gray-300 px-4 py-2">Category</th>
                                    <th class="border border-gray-300 px-4 py-2">Price</th>
                                    <th class="border border-gray-300 px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($products as $product)
                                    <tr class="{{ $loop->even ? 'bg-gray-50' : '' }}">
                                        <td class="border border-gray-300 px-4 py-2">{{ $loop->iteration }}</td>
                                        <td class="border border-gray-300 px-4 py-2">{{ $product->title }}</td>
                                        <td class="border border-gray-300 px-4 py-2">{{ $product->description }}</td>
                                        <td class="border border-gray-300 px-4 py-2">{{ $product->price }}</td>
                                        <td class="border border-gray-300 px-4 py-2">
                                            <div class="flex space-x-2">
                                                <a href="{{ route('admin/products/edit', ['id' => $product->id]) }}"
                                                    class="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
                                                    Edit
                                                </a>
                                                <a href="{{ route('admin/products/delete', ['id' => $product->id]) }}"
                                                    class="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td class="text-center border border-gray-300 px-4 py-2" colspan="5">
                                            Product not found
                                        </td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
