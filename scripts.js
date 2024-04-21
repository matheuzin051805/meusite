document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const contentTabs = document.querySelectorAll('.content-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('href').substring(1);
            contentTabs.forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });

    const videoItems = document.querySelectorAll('.video-item');
    const postItems = document.querySelectorAll('.post-item');
    const detalhesContainer = document.getElementById('detalhes-container');

    function showDetails(contentType, contentId) {
        if (contentType === 'video') {
            detalhesContainer.innerHTML = `<h2>Detalhes do Vídeo ${contentId}</h2>
                                           <p>Descrição do Vídeo ${contentId}.</p>
                                           <div class="comments">
                                               <h3>Comentários:</h3>
                                               <textarea placeholder="Deixe seu comentário..." rows="4"></textarea>
                                               <button>Enviar Comentário</button>
                                           </div>`;
        } else if (contentType === 'post') {
            detalhesContainer.innerHTML = `<h2>Detalhes da Postagem ${contentId}</h2>
                                           <p>Conteúdo da Postagem ${contentId}.</p>
                                           <div class="comments">
                                               <h3>Comentários:</h3>
                                               <textarea placeholder="Deixe seu comentário..." rows="4"></textarea>
                                               <button>Enviar Comentário</button>
                                           </div>`;
        }
    }

    videoItems.forEach(video => {
        video.addEventListener('click', () => {
            const videoId = video.getAttribute('data-video');
            showDetails('video', videoId);
        });
    });

    postItems.forEach(post => {
        post.addEventListener('click', () => {
            const postId = post.getAttribute('data-post');
            showDetails('post', postId);
        });
    });
});
