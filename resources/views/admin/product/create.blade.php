<x-app-layout>
    <x-slot name="header">
        <p style="font-weight: 800;">Create Your Product</p>
    </x-slot>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-800 ">
                    <h1 style="margin-bottom: 1rem;">Add Product</h1>
                    <hr style="margin-bottom: 2rem;">
                    <div style="margin: 2rem 0;">
                        <p><a href="{{ route('admin/products') }}"
                                style=" padding:1rem; background: blue; margin-top: 1rem; color: white; border-radius:1rem;">Go
                                Back</a></p>
                    </div>
                    <form style="display: flex; flex-direction: column; gap: 1rem;"
                        action="{{ route('admin/products/save') }}" method="POST" enctype="multipart/form-data"
                        class="my-4">
                        @csrf
                        <div class="row mb-3">
                            <div class="col">
                                <input class="w-full rounded-lg" type="text" name="title" id="title"
                                    class="form-control" placeholder="Title">
                                @error('title')
                                    <span class="p-3 bg-red-400 text-white">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <input class="w-full rounded-lg" type="text" name="description" id="description"
                                    class="form-control" placeholder="Description">
                                @error('description')
                                    <span class="p-3 bg-red-400 text-white">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <input class="w-full rounded-lg" type="text" name="price" id="price"
                                    class="form-control" placeholder="Price">
                                @error('price')
                                    <span class="p-3 bg-red-400 text-white">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <input class="w-full rounded-lg" type="text" name="image" id="image"
                                    class="form-control" placeholder="Image">
                                @error('image')
                                    <span class="p-3 bg-red-400 text-white">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="flex">
                                <button
                                    style=" padding:1rem; background: blue; margin-top: 1rem; color: white; border-radius:1rem;">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
</x-app-layout>
