# FullStack-AI-Projesi

// Proje Yapısı

frontend/
        /web    #React chat web arayüzü
        /mobil  #React CLI 
backend/        # .NET / FastAPI API sunucusu
ai-service/     # Hugging Face üzerinde duygu analizi modeli


// Kurulum:

Backend:
cd backend
pip install -r requirements.txt 
uvicorn main:app --reload

Frontend:
cd frontend/web
npm install
npm start

Mobil (React Native):
cd frontend/mobil
npm install
eas build --platform android   #expo APK oluşturuldu, indirme link: https://expo.dev/accounts/turkmennahmet/projects/mobil/builds/e7afa9f0-7935-4c4f-aa15-6c124d6d5d88


// Kullanılan AI Araçları

Hugging Face Spaces: Duygu analizi modeli
FastAPI: API sunucusu
Gradio Client: HF API ile iletişim
React / React Native: Web ve mobil arayüz


// Canlı Demo Linkler

Web Chat (Vercel):
https://full-stack-ai-projesi-eight.vercel.app/

Mobil APK (Expo / EAS):
https://expo.dev/accounts/turkmennahmet/projects/mobil/builds/e7afa9f0-7935-4c4f-aa15-6c124d6d5d88

Hugging Face AI Servisi:
https://huggingface.co/spaces/turkmennahmet/fullstack-ai

Backend API (Render):
FastAPI: https://fullstack-ai-projesi-1-r6ed.onrender.com/predict
.NET: https://fullstack-ai-projesi-1-r6ed.onrender.com/api/Message


// Kod Hakimiyet Kanıtı ve AI Yardımları

/ai-service : .NET'den gelen kullanıcı metnini (/predict endpoint'inde) kabul etmek. Hugging Face'de çalışan duygu analizine iletmek
/backend : Controller,Data,Models oluşturuldu. Render'da deploy ettiğimiz link sayesinde Python AI servisine POST işlemi oluyor ve istenilen bilgiler SQLite (chat.db)' ye kayıt ediliyor
/frontend : Kullanıcıdan nickanme alarak sohbet oturumunu başlatmak, gönderilen her metni (user input) API'ye iletmek ve Backend'den gelen mesaj listesini ve anlık duygu analizi skorunu ekranda listelemektir.
Frontend web'de Javascript bazı bölümlerde yardım alındı. CSS iyileştirmelerinde yardım alındı
Frontend mobil'de ise aynı görünüm olması için web kodlarından mobile eşleştirmede yardım alındı. CSS iyileştirmelerinde yardım alındı
