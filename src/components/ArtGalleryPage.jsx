import ArtGallery from "./ArtGallery";

function ArtGalleryPage() {
    return (
        <div className="App">
            <header className="App-header bg-primary text-white text-center p-4">
                <h1>My IPFS Gallery</h1>
            </header>
            <ArtGallery />
        </div>
    );
}
export default ArtGalleryPage;