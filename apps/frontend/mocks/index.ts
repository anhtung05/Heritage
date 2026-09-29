export interface HeritageItemMock {
  id: string;
  name: string;
  location: string;
  category: 'Phi vật thể' | 'Vật thể' | 'Danh thắng';
  status: 'Đã duyệt' | 'Đang rà soát';
  thumbnailUrl?: string;
}

export const MOCK_HERITAGE_ITEMS: HeritageItemMock[] = [
  {
    id: 'h-01',
    name: 'Nhã nhạc Cung đình Huế',
    location: 'Thừa Thiên Huế',
    category: 'Phi vật thể',
    status: 'Đã duyệt',
  },
  {
    id: 'h-02',
    name: 'Danh thắng Ngũ Hành Sơn',
    location: 'Đà Nẵng',
    category: 'Danh thắng',
    status: 'Đã duyệt',
  },
  {
    id: 'h-03',
    name: 'Nghệ thuật Bài Chòi Trung Bộ',
    location: 'Đà Nẵng - Huế - Quảng Nam',
    category: 'Phi vật thể',
    status: 'Đang rà soát',
  },
];

/**
 * Hàm mock API giả lập gọi lấy danh sách di sản (có hỗ trợ độ trễ mạng)
 */
export async function fetchMockHeritageList(delayMs = 300): Promise<HeritageItemMock[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_HERITAGE_ITEMS);
    }, delayMs);
  });
}

export interface ChatRequestMock {
  message: string;
  use_rag?: boolean;
  session_id?: string | null;
}

export interface ChatSourceMock {
  passage_id?: string;
  doc?: string;
  url?: string | null;
  quote?: string;
}

export interface ChatSuggestionMock {
  id?: string;
  name?: string;
  score?: number;
  suggested?: string;
  original?: string;
}

export interface ChatResponseMock {
  answer: string;
  sources: ChatSourceMock[];
  corrected_from: string;
  corrected_to: string;
  needs_user_choice: boolean;
  suggestions: ChatSuggestionMock[];
  entity_id: string | null;
  intent: string | null;
  resolution_status: string | null;
  answer_type: string | null;
}

export const MOCK_CHAT_RESPONSE: ChatResponseMock = {
  answer:
    'Đây là câu trả lời mẫu từ trợ lý di sản.',
  sources: [
    {
      passage_id: 'mock-source-01',
      doc: 'Nguồn dữ liệu di sản mẫu',
      url: null,
      quote: 'Đoạn trích mẫu phục vụ phát triển frontend.',
    },
  ],
  corrected_from: '',
  corrected_to: '',
  needs_user_choice: false,
  suggestions: [],
  entity_id: null,
  intent: null,
  resolution_status: 'resolved',
  answer_type: 'mock',
};

  export async function fetchMockChat(
  request: ChatRequestMock,
  delayMs = 300,

): Promise<ChatResponseMock> {
  void request;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_CHAT_RESPONSE);
    }, delayMs);
  });
}

  export interface GraphNodeMock {
  id: string;
  label: string;
  kind?: string | null;
  degree: number;
  seed: boolean;
}

export interface GraphLinkMock {
  source: string;
  target: string;
  rel?: string | null;
  weight: number;
}

export interface GraphSubgraphMock {
  nodes: GraphNodeMock[];
  links: GraphLinkMock[];
}
export const MOCK_GRAPH_SUBGRAPH: GraphSubgraphMock = {
  nodes: [
    {
      id: 'node-hue',
      label: 'Huế',
      kind: 'location',
      degree: 3,
      seed: true,
    },
    {
      id: 'node-heritage',
      label: 'Di sản văn hóa',
      kind: 'topic',
      degree: 1,
      seed: false,
    },
  ],
  links: [
    {
      source: 'node-hue',
      target: 'node-heritage',
      rel: 'related_to',
      weight: 1,
    },
  ],
};

export async function fetchMockGraphSubgraph(
  delayMs = 300,
): Promise<GraphSubgraphMock> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_GRAPH_SUBGRAPH);
    }, delayMs);
  });
}

export interface TourStopMock {
  story_id: string;
  order_index: number;
  title: string;
  description?: string | null;
  scene_title?: string | null;
  scene_description?: string | null;
  bbox_min?: string | null;
  bbox_max?: string | null;
  transform_7dof?: Record<string, unknown> | null;
  model_url?: string | null;
  camera_clip_url?: string | null;
  camera_name?: string | null;
  clip_start_s?: number | null;
  clip_end_s?: number | null;
  camera_fov?: number | null;
  pan_enable: boolean;
  instant_move: boolean;
  sky?: string | null;
  free_explore: boolean;
  explore_area?: Record<string, unknown> | null;
  start_camera_position?: string | null;
  start_camera_target?: string | null;
  zoom_camera_position?: string | null;
  zoom_camera_target?: string | null;
  narration_url?: string | null;
  captions_vtt_url?: string | null;
  narration_duration_ms?: number | null;
  highlights: Record<string, unknown>[];
}

export interface TourResponseMock {
  slug: string;
  locale: string;
  title: string;
  tagline?: string | null;
  location_label?: string | null;
  splash_image_url?: string | null;
  ambient_audio_url?: string | null;
  default_camera_clip_url?: string | null;
  revision: number;
  published_at?: string | null;
  stops: TourStopMock[];
}
export const MOCK_TOUR: TourResponseMock = {
  slug: 'lang-tu-duc',
  locale: 'vi',
  title: 'Lăng Tự Đức',
  tagline: 'Không gian di sản Huế',
  location_label: 'Huế',
  splash_image_url: null,
  ambient_audio_url: null,
  default_camera_clip_url: null,
  revision: 1,
  published_at: null,
  stops: [],
};
export async function fetchMockTour(
  slug = 'lang-tu-duc',
  locale = 'vi',
  delayMs = 300,

): Promise<TourResponseMock> {
  void slug;
  void locale;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_TOUR);
    }, delayMs);
  });
}
export interface GraphStatsMock {
  [key: string]: unknown;
}

export const MOCK_GRAPH_STATS: GraphStatsMock = {
  nodes: 12,
  edges: 24,
  chunks: 8,
};
export async function fetchMockGraphStats(
  delayMs = 300,
): Promise<GraphStatsMock> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_GRAPH_STATS);
    }, delayMs);
  });
}