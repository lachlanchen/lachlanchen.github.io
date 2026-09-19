[English](README.md) · [العربية](i18n/README.ar.md) · [Español](i18n/README.es.md) · [Français](i18n/README.fr.md) · [日本語](i18n/README.ja.md) · [한국어](i18n/README.ko.md) · [Tiếng Việt](i18n/README.vi.md) · [中文 (简体)](i18n/README.zh-Hans.md) · [中文（繁體）](i18n/README.zh-Hant.md) · [Deutsch](i18n/README.de.md) · [Русский](i18n/README.ru.md)

[![LazyingArt banner](assets/img/lazyingart-banner.png)](https://lazying.art)

# Lachlan Chen · 陈荣周（苗）

*Quad tango muto*

Personal site and CV of **Lachlan (Rongzhou) Chen**: PhD candidate in neuromorphic imaging at the University of Hong Kong, Creator & CEO of **LazyingArt LLC**, Cofounder & COO of **LightMind Tech Ltd**.

**Live:** <https://lachlanchen.lazying.art> (GitHub Pages, custom domain; also <https://lachlanchen.github.io>)

| Page | What is there |
| --- | --- |
| [About](https://lachlanchen.lazying.art/) | Bio, focus, highlights, companies, support |
| [Publications](https://lachlanchen.lazying.art/publications.html) | Papers by year, preprints, patents |
| [Projects](https://lachlanchen.lazying.art/projects.html) | Open-source tools and hardware with demo images |
| [CV](https://lachlanchen.lazying.art/cv.html) | Web CV plus one-page PDFs in [English](cv/Lachlan_Chen_CV_en.pdf) and [中文](cv/Lachlan_Chen_CV_zh.pdf) |

The site is plain HTML/CSS/JS, no build step. The EN / 中文 switch in the top bar is client-side (`assets/js/site.js`); publications and patents stay in English in both languages. The `i18n/` folder carries the multilingual profile READMEs so the language header above resolves.

[![LazyingArt](https://img.shields.io/badge/Website-lazying.art-111827?style=for-the-badge&logo=googlechrome&logoColor=white)](https://lazying.art)
[![OnlyIdeas](https://img.shields.io/badge/Website-onlyideas.art-1f2937?style=for-the-badge&logo=googlechrome&logoColor=white)](https://onlyideas.art)
[![LightMind](https://img.shields.io/badge/Company-lightmind.art-3B6746?style=for-the-badge&logo=googlechrome&logoColor=white)](https://lightmind.art)
[![EchoMind](https://img.shields.io/badge/EchoMind-chat.lazying.art-0b7285?style=for-the-badge&logo=openai&logoColor=white)](https://chat.lazying.art)
[![PaperAgent](https://img.shields.io/badge/Research-paper.lazying.art-334155?style=for-the-badge&logo=readthedocs&logoColor=white)](https://paper.lazying.art)
[![IDEAS Notebook](https://img.shields.io/badge/Notebook-ideas.onlyideas.art-374151?style=for-the-badge&logo=bookstack&logoColor=white)](https://ideas.onlyideas.art)
[![Google Scholar](https://img.shields.io/badge/Scholar-Profile-1d4ed8?style=for-the-badge&logo=googlescholar&logoColor=white)](https://scholar.google.com/citations?user=Kdqr_AcAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lachlan%20Chen-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://hk.linkedin.com/in/lachlan-chen-7a056a233)

## Focus

- The Art of Lazying: build less, unlock more life
- Automation systems for creator and research workflows
- Multilingual speech and learning tools
- Imaging, optics, and embodied AI

## Support

| Donate | PayPal | Stripe |
| --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=ko-fi&logoColor=white)](https://chat.lazying.art/donate) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

## Editing

- Text for both languages lives in `assets/js/site.js` (`I18N.en`, `I18N.zh`); page structure in the four `.html` files.
- The PDFs in `cv/` are built from `ProjectsLFS/CV/LazyingArt_VisionProfile_2026/` with XeLaTeX (`python3 make_zh.py && xelatex …`, twice).
- `CNAME` pins the custom domain `lachlanchen.lazying.art`; `.nojekyll` serves the files as-is.

## Contact

[![GitHub](https://img.shields.io/badge/GitHub-lachlanchen-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lachlanchen)
[![Email](https://img.shields.io/badge/Email-lach@lazying.art-0ea5e9?style=for-the-badge&logo=gmail&logoColor=white)](mailto:lach@lazying.art)

Build less. Live more.
