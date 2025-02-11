import { Dimensions, PixelRatio } from "react-native";

// Obtendo as dimensões da tela
const { width, height } = Dimensions.get("window");

// Definindo uma base para escala
const baseWidth = 375; // Largura padrão (iPhone 11)
const baseHeight = 812; // Altura padrão (iPhone 11)

/**
 * Função para ajustar largura proporcionalmente ao dispositivo
 */
export const scaleWidth = (size: number) => (width / baseWidth) * size;

/**
 * Função para ajustar altura proporcionalmente ao dispositivo
 */
export const scaleHeight = (size: number) => (height / baseHeight) * size;

/**
 * Função para ajustar tamanho de fonte proporcionalmente ao dispositivo
 */
export const scaleFont = (size: number) => {
    const scale = Math.min(width / baseWidth, height / baseHeight);
    return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};