// Image Fix Utility - Debug and fix image loading issues
const ImageFixer = {
    // Test if all images are loading correctly
    testImages: () => {
        console.log('🔍 Testing image loading...');
        const images = document.querySelectorAll('img[src^="Images/"]');
        
        if (images.length === 0) {
            console.log('❌ No images found with Images/ paths');
            return;
        }

        console.log(`📷 Found ${images.length} images to test`);
        
        images.forEach((img, index) => {
            const testImage = new Image();
            testImage.onload = () => {
                console.log(`✅ Image ${index + 1}: ${img.src} - LOADED`);
                img.style.border = '2px solid green';
            };
            testImage.onerror = () => {
                console.log(`❌ Image ${index + 1}: ${img.src} - FAILED`);
                img.style.border = '2px solid red';
                img.alt = `BROKEN: ${img.src}`;
            };
            testImage.src = img.src;
        });
    },

    // List all image files in the Images directory
    listExpectedImages: () => {
        const expectedImages = [
            'Images/man-1.jpg',
            'Images/techflow-saas.jpg', 
            'Images/mashinc-realestate.jpg',
            'Images/lumiere-resturant.jpg',
            'Images/excellence-academy.jpg',
            'Images/websetly-screenshot.jpg',
            'Images/portfolio.jpg'
        ];

        console.log('📋 Expected images:');
        expectedImages.forEach(img => console.log(`   - ${img}`));
        
        return expectedImages;
    },

    // Fix common image path issues
    fixImagePaths: () => {
        console.log('🔧 Fixing image paths...');
        const images = document.querySelectorAll('img[src^="Images/"]');
        
        images.forEach(img => {
            const currentSrc = img.src;
            const filename = currentSrc.split('/').pop();
            
            // Try different path variations
            const pathVariations = [
                `Images/${filename}`,
                `./Images/${filename}`,
                `/Images/${filename}`,
                `images/${filename}` // lowercase
            ];

            // Test each variation
            pathVariations.forEach(path => {
                const testImg = new Image();
                testImg.onload = () => {
                    if (img.src !== window.location.origin + '/' + path) {
                        img.src = path;
                        console.log(`✅ Fixed: ${currentSrc} → ${path}`);
                    }
                };
                testImg.src = path;
            });
        });
    },

    // Replace broken images with placeholder
    addFallbacks: () => {
        console.log('🛡️ Adding image fallbacks...');
        const images = document.querySelectorAll('img[src^="Images/"]');
        
        images.forEach(img => {
            img.onerror = function() {
                // Create a colored placeholder
                this.src = 'data:image/svg+xml;base64,' + btoa(`
                    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#0a192f"/>
                        <text x="50%" y="50%" text-anchor="middle" fill="#ff6b35" font-size="16" font-family="Arial">
                            Image Not Found
                        </text>
                        <text x="50%" y="60%" text-anchor="middle" fill="#ffffff" font-size="12" font-family="Arial">
                            ${this.alt || 'Portfolio Image'}
                        </text>
                    </svg>
                `);
                this.style.opacity = '0.7';
                console.log(`🔄 Added fallback for: ${this.alt}`);
            };
        });
    },

    // Complete image diagnostic
    runDiagnostic: () => {
        console.log('🏥 Running complete image diagnostic...');
        console.log('==========================================');
        
        ImageFixer.listExpectedImages();
        console.log('');
        ImageFixer.testImages();
        console.log('');
        ImageFixer.addFallbacks();
        console.log('');
        
        setTimeout(() => {
            console.log('📊 Diagnostic Summary:');
            const allImages = document.querySelectorAll('img[src^="Images/"]');
            const loadedImages = Array.from(allImages).filter(img => img.complete && img.naturalHeight !== 0);
            const brokenImages = allImages.length - loadedImages.length;
            
            console.log(`   Total Images: ${allImages.length}`);
            console.log(`   Loaded Images: ${loadedImages.length}`);
            console.log(`   Broken Images: ${brokenImages}`);
            
            if (brokenImages > 0) {
                console.log('');
                console.log('💡 Troubleshooting Tips:');
                console.log('   1. Check if image files exist in the Images/ folder');
                console.log('   2. Verify file names match exactly (case-sensitive)');
                console.log('   3. Ensure images are not corrupted');
                console.log('   4. Try refreshing the page');
            } else {
                console.log('✅ All images loaded successfully!');
            }
        }, 2000);
    }
};

// Auto-run diagnostic when script loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Image Fix Utility Loaded');
    console.log('Run ImageFixer.runDiagnostic() to check images');
    
    // Auto-add fallbacks
    ImageFixer.addFallbacks();
});

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageFixer;
} else {
    window.ImageFixer = ImageFixer;
}
