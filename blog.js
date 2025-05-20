// Postlar
let posts = [
    { title: "Post 1", content: "İlk post içeriği" },
    { title: "Post 2", content: "İkinci post içeriği" }
    ];
    // Postları sıralama
    function listPosts() {
        console.log("*** Mevcut Postlar: ***");
        posts.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title} - ${post.content}`);
        });
    }

    // Yeni post ekleme
    function addPost(newPost) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(newPost);
            resolve();
        }, 2000);
        });
    }

    async function startBlog() {
        listPosts();
        console.log("\n Yeni post ekleniyor...\n");
        await addPost({ title: "Post 3", content: "Üçüncü post içeriği" });
        listPosts();
    }

    startBlog();
