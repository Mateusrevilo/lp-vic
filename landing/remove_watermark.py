import os
from PIL import Image, ImageDraw, ImageFilter
import glob

def remove_watermark(image_path):
    """Remove a marca d'água PixVerse.ai do canto superior direito"""
    try:
        # Abrir a imagem
        img = Image.open(image_path)
        width, height = img.size
        
        # A marca d'água geralmente está no canto superior direito
        # Vamos criar uma região para remover (canto superior direito - aproximadamente 15% da largura e 10% da altura)
        watermark_region = (int(width * 0.85), 0, width, int(height * 0.1))
        
        # Converter para RGBA se necessário
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # Criar uma máscara para a região da marca d'água
        mask = Image.new('L', img.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.rectangle(watermark_region, fill=255)
        
        # Aplicar blur na máscara para suavizar as bordas
        mask = mask.filter(ImageFilter.GaussianBlur(radius=5))
        
        # Criar uma imagem de preenchimento (usando a cor média da área ao redor)
        # Pegar uma amostra da área próxima à marca d'água
        sample_region = (int(width * 0.7), int(height * 0.05), int(width * 0.85), int(height * 0.15))
        sample = img.crop(sample_region)
        
        # Calcular a cor média
        sample_array = list(sample.getdata())
        avg_color = tuple(int(sum(x) / len(sample_array)) for x in zip(*sample_array))
        
        # Criar imagem de preenchimento
        fill_img = Image.new('RGBA', img.size, avg_color)
        
        # Aplicar a máscara para remover a marca d'água
        result = Image.composite(fill_img, img, mask)
        
        # Converter de volta para RGB se a imagem original não era RGBA
        if img.mode == 'RGBA':
            # Criar fundo branco
            background = Image.new('RGB', result.size, (255, 255, 255))
            background.paste(result, mask=result.split()[3])  # Usar canal alpha como máscara
            result = background
        
        # Salvar a imagem
        result.save(image_path, quality=95, optimize=True)
        print(f"Processada: {image_path}")
        return True
    except Exception as e:
        print(f"Erro ao processar {image_path}: {str(e)}")
        return False

def main():
    # Encontrar todas as imagens JPG no diretório
    image_extensions = ['*.jpg', '*.jpeg', '*.JPG', '*.JPEG']
    image_paths = []
    
    for ext in image_extensions:
        image_paths.extend(glob.glob(f'app/assests/**/{ext}', recursive=True))
    
    print(f"Encontradas {len(image_paths)} imagens para processar")
    
    for image_path in image_paths:
        remove_watermark(image_path)
    
    print("Processamento concluído!")

if __name__ == "__main__":
    main()

