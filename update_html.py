import codecs
import re

with codecs.open("d:/Protofolio/index.html", "r", "utf-8") as f:
    content = f.read()

# Replace meta and title
content = content.replace('Mohamed Ahmed Kassem', 'Abdelrhman Elsaid')
content = content.replace('Mohamed Kassem', 'Abdelrhman Elsaid')

# Replace MAK. with AE.
content = content.replace('MAK.', 'AE.')
content = content.replace('>MAK<', '>AE<')
content = content.replace('>M<', '>A<')

# Replace mohamed.cs
content = content.replace('mohamed.cs', 'abdelrhman.cs')

# Replace Grad 200
content = content.replace('<span class="code-orange">200</span><span class="code-gray">  // Full Mark 🎉</span>', '<span class="code-orange">2025</span><span class="code-gray">  // Graduation Year 🎉</span>')

# Replace CV link
content = content.replace('assets/Mohamed_Ahmed_Kassem_-_Dot_Net_Developer.pdf', 'Abdelrhman Elsaid (.Net Backend  Developer).pdf')

with codecs.open("d:/Protofolio/index.html", "w", "utf-8") as f:
    f.write(content)
