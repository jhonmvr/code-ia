export interface ActionCallbackData {
  messageId: string;
  actionId: string;
  action: {
    type: string;
    filePath?: string;
    content?: string;
  };
}

export interface ArtifactCallbackData {
  messageId: string;
  id: string;
  title: string;
  type?: string;
} 