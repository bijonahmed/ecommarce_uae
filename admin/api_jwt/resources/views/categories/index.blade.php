<div class="container">
    <h1>Category Treeview</h1>
    <ul class="treeview">
        @foreach ($categories as $category)
            @include('categories.category', ['category' => $category])
        @endforeach
    </ul>
</div>