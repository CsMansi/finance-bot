# Deep Finance Research Chatbot

This project is a submission for the Full Stack Developer technical assessment at Deqode Labs. It is an intelligent chatbot designed to conduct deep, multi-step web research on financial topics, provide cited reports, and maintain a persistent chat history for each user.

---

## ✨ Core Features

-   **Live Conversational Interface**: Real-time, token-level streaming of assistant messages. 
-   **"Show Thinking" Trace**: Separate panel to view the agent's reasoning process and tool usage.
-   **Persistent Chat Threads**: Each user has isolated chat threads with a history of at least 100 messages.
-   **User Authentication**: Secure email and password login system using JWT for session management.
-   **Advanced Memory System**:
    -   **Short-Term Memory**: Thread-scoped working memory managed by LangGraph checkpointers (using Redis) for contextual conversations.
    -   **Long-Term Memory**: Episodic and semantic memory across all threads, implemented using a vector store for retrieving relevant past information.
-   **Deep Research Workflow**: A multi-agent system that performs web searches, crawls pages, deduplicates sources, synthesizes information, and generates a structured report.
-   **Cited Sources**: A dedicated panel listing all URLs, titles, and snippets used for research, with clickable links.
-   **Exportable Reports**: Ability to download the final research report as a Markdown (`.md`) file with inline citations.

---

## 🛠️ Tech Stack

-   **Frontend**: Next.js (React 18), Material-UI (MUI)
-   **Backend**: NestJS (Node.js / TypeScript)
-   **AI Agents**: Python, LangGraph
-   **LLMs & Search**: Configurable via environment variables (e.g., OpenAI, Gemini, Tavily, Serper)
-   **Database**: PostgreSQL (via Docker), Prisma ORM
-   **Caching/Short-Term Memory**: Redis
-   **Vector Store/Long-Term Memory**: PGVector
-   **DevOps**: Docker & Docker Compose

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   [Git](https://git-scm.com/)
-   [Node.js](https://nodejs.org/en/) (v18 or later)
-   [Python](https://www.python.org/) (v3.9 or later)
-   [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

### Local Setup

1.  **Clone the repository:**
    ```bash
    git clone [Your-GitHub-Repo-Link]
    cd finance-bot
    ```

2.  **Set up environment variables:**
    Create a `.env` file in the root directory by copying the example file.
    ```bash
    cp .env.example .env
    ```
    Now, open the `.env` file and fill in the required values for your database credentials, JWT secret, and API keys for your chosen LLM and search providers.

    ```env
    # Database
    DATABASE_URL="postgresql://user:password@db:5432/financedb?schema=public"

    # Redis
    REDIS_URL="redis://redis:6379"

    # Auth
    JWT_SECRET="your-super-secret-key"

    # LLM & Search APIs
    OPENAI_API_KEY="sk-..."
    TAVILY_API_KEY="..."
    # Add other keys as needed
    ```

3.  **Build and run the containers:**
    This command will build the images for the frontend, backend, python agent, and pull the required database and Redis images. It will then start all the services.
    ```bash
    docker-compose up --build
    ```

4.  **Run Database Migrations:**
    Once the containers are running, open a new terminal and run the Prisma migration command to set up the database schema.
    ```bash
    docker-compose exec backend npx prisma migrate deploy
    ```

5.  **Access the application:**
    -   Frontend (Next.js): `http://localhost:3000`
    -   Backend (NestJS): `http://localhost:8000`
-   Python Agent Service: `http://localhost:8001`

---

## 🧪 Running Tests

This project includes a minimal test suite to ensure the reliability of core components.

-   **To run backend (NestJS) unit tests:**
    ```bash
    docker-compose exec backend npm run test
    ```
-   **To run Python agent unit tests:**
    ```bash
    docker-compose exec agent pytest
    ```
-   **To run end-to-end tests:**
    ```bash
    docker-compose exec backend npm run test:e2e
    ```

---

## 📋 Demo Script

As per the task requirements, the application was tested with the following research query:

> **"Is HDFC Bank undervalued vs peers in last 2 quarters?"**

The process and the final generated report for this query are demonstrated in the YouTube video linked above.

---

## 📂 Project Structure

The repository is organized into the following main directories:

-   `agent/`: Contains the Python service with LangGraph agents for research orchestration.
-   `backend/`: The NestJS application handling authentication, sessions, and API gateway logic.
-   `frontend/`: The Next.js client-side application for the user interface.
-   `prisma/`: Contains the database schema (`schema.prisma`) and migration files.
