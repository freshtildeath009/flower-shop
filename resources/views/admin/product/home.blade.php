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
                            style="padding: 1rem; background-color: blue; width: fit-content; border-radius: 1rem; color:white;">
                            Add Product
                        </a>
                    </div>
                    <hr class="mb-4">

                    @if (Session::has('success'))
                        <div class="mb-4 p-4 bg-green-100 text-green-700 rounded-lg"
                            style="background-color: lightgreen; ">
                            {{ Session::get('success') }}
                        </div>
                    @endif

                    <div class="overflow-x-auto">
                        <table
                            style="width: 100%; text-align: left; border-collapse: collapse; border: 1px solid #ccc;">
                            <thead style="background-color: #f5f5f5;">
                                <tr>
                                    <th style="border: 1px solid #ccc; padding: 8px;">#</th>
                                    <th style="border: 1px solid #ccc; padding: 8px;">Title</th>
                                    <th style="border: 1px solid #ccc; padding: 8px;">Category</th>
                                    <th style="border: 1px solid #ccc; padding: 8px;">Price</th>
                                    <th style="border: 1px solid #ccc; padding: 8px; width: 20px;">Image Url</th>
                                    <th style="border: 1px solid #ccc; padding: 8px;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse ($products as $product)
                                    <tr style="{{ $loop->even ? 'background-color: #f9f9f9;' : '' }}">
                                        <td style="border: 1px solid #ccc; padding: 8px;">{{ $loop->iteration }}</td>
                                        <td style="border: 1px solid #ccc; padding: 8px;">{{ $product->title }}</td>
                                        <td style="border: 1px solid #ccc; padding: 8px;">{{ $product->description }}
                                        </td>
                                        <td style="border: 1px solid #ccc; padding: 8px;">{{ $product->price }}</td>
                                        <td style="border: 1px solid #ccc; padding: 8px; text-overflow: ellipsis;">
                                            {{ $product->image }}
                                        </td>
                                        <td style="border: 1px solid #ccc; padding: 8px;">
                                            <div style="display: flex; gap: 8px;">
                                                <a href="{{ route('admin/products/edit', ['id' => $product->id]) }}"
                                                    style="color: white; background-color: green; padding: 8px 16px; text-decoration: none; border-radius: 5px;">
                                                    Edit
                                                </a>
                                                <a href="{{ route('admin/products/delete', ['id' => $product->id]) }}"
                                                    style="color: white; background-color: red; padding: 8px 16px; text-decoration: none; border-radius: 5px;">
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td style="text-align: center; border: 1px solid #ccc; padding: 8px;"
                                            colspan="6">
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
