<x-app-layout>
    <x-slot name="header">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic eveniet quos nulla placeat totam in distinctio
        delectus voluptas vitae repellat. Rerum optio expedita a accusantium? Vel, ducimus. Minima, blanditiis sint!
    </x-slot>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-800 ">
                    <h1 class="mb-0 text-3xl ">Add Product</h1>
                    <hr class="mb-5">
                    <p><a href="{{ route('admin/products') }}" class="p-2 bg-blue-700 w-fit rounded text-gray-100">Go
                            Back</a></p>
                    <form action="{{ route('admin/products/save') }}" method="POST" enctype="multipart/form-data"
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
                        <div class="row">
                            <div class="flex">
                                <button class="p-2 bg-blue-700 w-fit rounded text-gray-100">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
