import {
  Box,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState, useRef, FC, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
const AudioPlayer: FC<{ src: string }> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.addEventListener("ended", handlePlaybackEnded);

      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        audioElement.removeEventListener("ended", handlePlaybackEnded);
      };
    }
  }, []);

  const handleLoadedMetadata = (): void => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setTotalTime(audioElement.duration);
    }
  };

  const handlePlaybackEnded = (): void => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handlePlayPause = (): void => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }

      setIsPlaying(!isPlaying);
    }
  };
  const handleSliderChange = (value: number): void => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.currentTime = (value / 100) * audioElement.duration;
      setProgress(value);
    }
  };

  const handleTimeUpdate = (): void => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const currentTime = audioElement.currentTime;
      const duration = audioElement.duration;
      const progress = (currentTime / duration) * 100;
      setCurrentTime(currentTime);
      setProgress(progress);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box bg="gray.200" borderRadius="lg" p={4} display={"none"}>
        <audio
          src={src}
          controls
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          ref={audioRef}
        />
      </Box>

      <Flex align={"center"} justify={"center"} gap={3}>
        {isPlaying ? (
          <FaPause onClick={handlePlayPause} size={20} />
        ) : (
          <FaPlay onClick={handlePlayPause} size={20} />
        )}
        <Text>{formatTime(currentTime)}</Text>
        <Slider
          value={progress}
          onChange={handleSliderChange}
          colorScheme="purple"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>{formatTime(totalTime)}</Text>
      </Flex>
    </VStack>
  );
};

export default AudioPlayer;
