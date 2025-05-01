// Placeholders de imagens para uso na aplicação
export const PLACEHOLDERS = {
  logo: 'https://placehold.co/150x50/1976d2/FFFFFF.png?text=PosgradoMed',
  heroImage: 'https://placehold.co/700x500/1976d2/FFFFFF.png?text=Português+Médico',
  ctaImage: 'https://placehold.co/700x500/f57c00/FFFFFF.png?text=Médicos+Brasil',
  avatarPlaceholder: (index: number) => `https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 10}.jpg`,
  featureIcon1: 'https://placehold.co/80x80/1976d2/FFFFFF.png?text=Agendar',
  featureIcon2: 'https://placehold.co/80x80/1976d2/FFFFFF.png?text=Estudar',
  featureIcon3: 'https://placehold.co/80x80/1976d2/FFFFFF.png?text=Progredir',
}; 